export function buildStateType(stateDef: any, indent = 2) {
  let stateType = 'Partial<{\n';
  const indentTabs = '  '.repeat(indent);
  const closeIndents = '  '.repeat(indent - 1);
  if (stateDef === null) {
    // we're going to return an any here because while it's null now, maybe it'll be an any later.
    return 'any';
  }
  if (typeof stateDef === 'string') {
    return 'string';
  }
  if (Number.isInteger(stateDef)) {
    return 'number';
  }
  for (const prop of Object.keys(stateDef)) {
    const propValue = stateDef[prop];
    const safeProp = prop.replace(/'/g, '\\\'');
    if (typeof propValue === 'string') {
      stateType += `${indentTabs}'${safeProp}': string;\n`;
    } else if (Array.isArray(propValue)) {
      const arrayPropTypes = propValue.map(pv => buildStateType(pv, indent + 1));
      stateType += `${indentTabs}'${safeProp}': Partial<[${arrayPropTypes.join(', ')}]>;\n`;
    } else {
      stateType += `${indentTabs}'${safeProp}': ${buildStateType(propValue, indent + 1)};\n`;
    }
  }
  stateType += `${closeIndents}}>`;
  return stateType;
}
