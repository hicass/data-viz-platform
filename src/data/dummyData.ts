export const graphData = [
  {
    id: 'Cost',
    color: 'hsl(345, 70%, 50%)',
    data: [
      {
        x: 'Apr',
        y: 40,
      },
      {
        x: 'May',
        y: 50,
      },
      {
        x: 'Jun',
        y: 43,
      },
      {
        x: 'Jul',
        y: 90,
      },
      {
        x: 'Aug',
        y: 60,
      },
      {
        x: 'Sep',
        y: 50,
      },
      {
        x: 'Oct',
        y: 55,
      },
    ],
  },
];

export const performanceData = [
  {
    title: 'Infrastructure Units',
    description: 'This describes variable two and what the shown data means.',
    value: '$421.07',
  },
  {
    title: 'Charging Growth',
    description: 'This describes variable two and what the shown data means.',
    value: '33.07',
  },
  {
    title: 'Localization change',
    description: 'This describes variable two and what the shown data means.',
    value: '21.9%',
  },
  {
    title: 'Fleet growth',
    description: 'This describes variable two and what the shown data means.',
    value: '7.03%',
  },
];

export const scenarioResultData = [
  {
    result:
      'The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.',
  },
  {
    result:
      'The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.',
  },
];

export const variableCategoryData = [
  {
    categoryTitle: 'Environmental/Emissions',
    variables: [
      {
        id: 1,
        title: 'Carbon',
        description:
          'The total amount of carbon dioxide (CO2) emitted by a fleet or operation, typically measured in tons or kilograms. It helps assess the environmental impact of transportation and other activities.',
      },
      {
        id: 2,
        title: 'Co2 Distribution',
        description:
          'The method or model for allocating CO2 emissions across various sources, such as different vehicles or operational areas, in order to assess overall environmental impact.',
      },
      {
        id: 3,
        title: 'Emissions Factor',
        description:
          'A value used to calculate the amount of CO2 produced per unit of energy consumed or distance traveled. This helps estimate emissions based on specific activity.',
      },
    ],
  },
  {
    categoryTitle: 'Operations/Logistics',
    variables: [
      {
        id: 4,
        title: 'Fleet Sizing',
        description:
          'The process of determining the optimal number and type of vehicles needed for a fleet based on factors such as demand, distance, and efficiency.',
      },
      {
        id: 5,
        title: 'Request Rate',
        description:
          'The frequency at which requests (e.g., service orders, transport bookings) are made, which affects how resources like vehicles or staff are allocated.',
      },
      {
        id: 6,
        title: 'Operational Efficiency',
        description:
          'The effectiveness of a fleet or operation in using resources (such as time, fuel, or staff) to achieve its goals with minimal waste.',
      },
      {
        id: 7,
        title: 'Load Factor',
        description:
          'A measure of how efficiently a vehicle is being used, representing the ratio of actual cargo carried versus the maximum capacity.',
      },
      {
        id: 8,
        title: 'Vehicle Capacity',
        description:
          'The maximum load or volume that a vehicle can carry, which affects how many goods can be transported at once and impacts fleet efficiency.',
      },
      {
        id: 9,
        title: 'Transit Time',
        description:
          'The time taken for goods or passengers to travel from the origin to the destination, accounting for variables like stops, traffic, and route changes.',
      },
    ],
  },
  {
    categoryTitle: 'Pricing/Costs',
    variables: [
      {
        id: 10,
        title: 'Parking Rate',
        description:
          'The cost associated with parking a vehicle for a specified duration, often used in the context of logistics or fleet management in urban areas.',
      },
      {
        id: 11,
        title: 'Border Rate',
        description:
          'The cost or fee associated with crossing a border, including tariffs, taxes, or customs fees that affect transportation or trade.',
      },
      {
        id: 12,
        title: 'Fuel Cost',
        description:
          'The price of fuel (gasoline, diesel, or other energy sources) used by vehicles, which directly impacts operational expenses in logistics and transportation.',
      },
    ],
  },
];
