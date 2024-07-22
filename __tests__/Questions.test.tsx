import Questions from '../src/component/Questionnaire/Questions';

describe('Questions array', () => {
  test('should contain the correct number of questions', () => {
    expect(Questions.length).toBe(5);
  });

  test('should have the correct structure for each question', () => {
    Questions.forEach((question, index) => {
      expect(question).toHaveProperty('srno');
      expect(question).toHaveProperty('question');
      expect(question).toHaveProperty('options');
      expect(question).toHaveProperty('scores');

      expect(typeof question.srno).toBe('string');
      expect(typeof question.question).toBe('string');
      expect(Array.isArray(question.options)).toBe(true);
      expect(Array.isArray(question.scores)).toBe(true);
      expect(question.options.length).toBeGreaterThan(0);
      expect(question.scores.length).toBeGreaterThan(0);
      expect(question.options.length).toBe(question.scores.length);
    });
  });

  test('should contain specific questions and options', () => {
    const specificQuestion = Questions.find(q => q.srno === '1');
    expect(specificQuestion).toBeDefined();
    expect(specificQuestion?.question).toBe('What is your age group ?');
    expect(specificQuestion?.options).toEqual([
      'Below 30',
      '30-45',
      'Above 45',
    ]);
    expect(specificQuestion?.scores).toEqual([1, 2, 3]);
  });
});
