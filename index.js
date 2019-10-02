module.exports.templateTags = [{
  name: 'RandomData',
  displayName: 'Random data selection',
  description: 'Randomly select element from a delemeter separated item list',
  args: [         
      {
          displayName: 'Values',
          description: 'A list of values, out of which the random will be selected',
          type: 'string',
          validate: v => (v ? '' : 'Required'),
      },
      {
        displayName: 'Delemeter',
        description: 'A value of list of values, out of which the random will be selected',
        type: 'string',
        validate: v => (v ? '' : 'Required'),
    }
  ],
  async run (context, values, delemeter) {
      let elements = values.split(delemeter);
      let finalElement = "";
      if(elements.length == 1){
          finalElement= elements[0];
      }
      finalElement = elements[Math.random() * elements.length | 0];
      return finalElement;
  }
}];