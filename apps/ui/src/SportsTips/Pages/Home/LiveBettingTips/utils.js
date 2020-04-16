export function prepareTabOption(tab) {
  var value = tab.match;
  return {
    label: value,
    value: value,
  };
}

export function prepareTabOptions(options) {
  return options.map((tab) => {
    return prepareTabOption(tab);
  });
}
