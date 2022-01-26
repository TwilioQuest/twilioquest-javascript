const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

function getMissingKeys(expected, actual) {
  return Object.keys(expected).filter(
    expectedKey =>
      !Object.keys(actual).some(actualKey => actualKey === expectedKey)
  );
}

function doesEntryMatch(
  [actualKey, actualValue],
  [expectedKey, expectedValue]
) {
  if (actualKey !== expectedKey) {
    // only compare matching keys
    return false;
  }

  if (actualValue === expectedValue) {
    return true;
  }

  return false;
}

function getObjectKeysWithMismatchedValues(expected, actual) {
  return Object.entries(expected)
    .filter(expectedEntry => {
      return !Object.entries(actual).some(actualEntry =>
        doesEntryMatch(actualEntry, expectedEntry)
      );
    })
    .map(([key]) => key);
}

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      'construction.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        ${helper.world.getTranslatedString('javascript.instantiation.validator.error.scriptNotFound')}
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const scriptContext = {
      process: process,
      __TQ: {},
    };
    const testCode = `
      ${userCode};
      
      try {
        __TQ.construct = construct;
      } catch(e) {
        __TQ.error = e;
      }
    `;

    // First, execute user code to ensure it runs unchanged
    let script = new vm.Script(userCode);
    script.runInNewContext(Object.assign({}, scriptContext));

    // Assuming that it doesn't throw, we can try running it with our test
    // code appended to it.
    script = new vm.Script(testCode);
    script.runInNewContext(scriptContext);

    // Inspect the script context for the stuff we want
    const tq = scriptContext.__TQ;

    if (tq.error) {
      console.log(tq.error);
      if (tq.error.name === 'ReferenceError') {
        return helper.fail(helper.world.getTranslatedString('javascript.instantiation.validator.error.reference'));
      } else {
        return helper.fail(`
          ${helper.world.getTranslatedString('javascript.classes.validator.error.validation')}
          ${tq.error}
        `);
      }
    }

    // Check type of the function
    if (!isFunction(tq.construct)) {
      let message = helper.world.getTranslatedString('javascript.instantiation.validator.error.notCallableFn');
      return helper.fail(message);
    }

    // Check functionality
    try {
      const result1 = tq.construct('Gene');
      const result2 = tq.construct('Irene');

      if (result1 === undefined || result1 === null) {
        return helper.fail(helper.world.getTranslatedString('javascript.instantiation.validator.error.notReturn'));
      }

      if (typeof result1 !== 'object') {
        return helper.fail(helper.world.getTranslatedString('javascript.instantiation.validator.error.notReturnObj'));
      }

      const expected1 = {
        name: 'Gene',
        material: 'human',
        assemble: true,
        duration: 1000,
      };

      const result1MissingKeys = getMissingKeys(expected1, result1);
      if (result1MissingKeys.length > 0) {
        return helper.fail(helper.world.getTranslatedString('javascript.instantiation.validator.error.missingKeys', { result1MissingKeys })); 
      }

      const result1MismatchedKeys = getObjectKeysWithMismatchedValues(
        expected1,
        result1
      );
      if (result1MismatchedKeys.length > 0) {
        return helper.fail(`
          ${helper.world.getTranslatedString('javascript.instantiation.validator.error.notMatchKeys1')}
          ${result1MismatchedKeys
            .map(key => `"${key}" ${helper.world.getTranslatedString('javascript.instantiation.validator.error.notMatchKeys2')} ${expected1[key]}.`)
            .join('<br/>')}
        `);
      }

      const expected2 = {
        name: 'Irene',
        material: 'human',
        assemble: true,
        duration: 1000,
      };

      const result2MismatchedKeys = getObjectKeysWithMismatchedValues(
        expected2,
        result2
      );
      if (result2MismatchedKeys.length > 0) {
        return helper.fail(`
          ${helper.world.getTranslatedString('javascript.instantiation.validator.error.notMatchKeys1')}
          ${result2MismatchedKeys
            .map(key => `"${key}" ${helper.world.getTranslatedString('javascript.instantiation.validator.error.notMatchKeys2')} ${expected2[key]}.`)
            .join('<br/>')}
        `);
      }
    } catch (ee) {
      return helper.fail(`
        ${helper.world.getTranslatedString('javascript.instantiation.validator.error.constructFn')}
        <span class="highlight">${ee}</span>
      `);
    }

    helper.success(helper.world.getTranslatedString('javascript.instantiation.validator.success'));
  } catch (e) {
    helper.fail(`
      ${helper.world.getTranslatedString('javascript.classes.validator.error.executingJS')} <br/><br/>
      <span class="highlight">${e}</span>
    `);
  }
};
