type Question = {
    srno: string;
    question: string;
    options: string[];
    scores: number[];
  };
  
  const Questions: Question[] = [
    {
      srno: '1',
      question: 'What is your age group ?',
      options: [
        'Below 30',
        '30-45',
        'Above 45',
      ],
      scores: [1, 2, 3],
    },
    {
      srno: '2',
      question: 'How long do you plan to invest ?',
      options: [
        'Less than 1 year',
        '1-5 years',
        'More than 5 years',
      ],
      scores: [1, 2, 3],
    },
    {
      srno: '3',
      question:
        'Which of the following best describes your understanding of the investment market?',
      options: [
        'Little awareness of the investment market.',
        'Awareness of the financial market is limited to information passed on by broker or financial planner. Rely on professionals to keep me updated ',
        'An experienced investor, constantly keeps up to date with the investment market. Have exposure to various asset classes and fully aware of the risks involved to gain high returns',
      ],
      scores: [1, 3, 5],
    },
    {
      srno: '4',
      question: 'Your preferred strategy for managing investment risk is:',
      options: [
        'To invest mainly in capital stable investments.',
        'To have a diversified investment portfolio across a range of asset classes to minimise risk.',
        'Do not want to reduce it as investment risk leads to higher returns over the long-term.',
      ],
      scores: [1, 3, 5],
    },
    {
      srno: '5',
      question:
  'An investment portfolio with high exposure to growth assets tends to generate higher returns, albeit with some volatility (fluctuations in value). To what extent are you willing to experience shorter-term losses/ volatility to generate higher returns?' ,   
  options: [
        'Little uncomfortable seeing my investments fluctuate',
        'Somewhat comfortable, assuming there is a limit to the volatility',
        'Very comfortable. I understand higher returns may come with risk or fluctuation in the short term. However, over the long-term, there is a low risk of capital loss ',
      ],
      scores: [1, 3, 5],
    },
  ];

  export default Questions;