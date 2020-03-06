import GlossaryTerms from "../GlossaryTerms";

describe("GlossaryTerms", () => {
    it("should render a glossary term", () => {
        const content = [
            {
                term: "a term",
                definition: "a definition"
            }
        ];
        const result = GlossaryTerms(content);
        expect(result).toMatchSnapshot();
    });

    it("should render glossary terms", () => {
        const content = [
            {
                term: "a term",
                definition: "a definition"
            },
            {
                term: "another term",
                definition: "another definition"
            }
        ];
        const result = GlossaryTerms(content);
        expect(result).toMatchSnapshot();
    });

    it("should render an error message if no glossary terms", () => {
      const content = [];
      const result = GlossaryTerms(content);
      expect(result).toMatchSnapshot();
    });

    it("should render an error message if glossary terms are not defined", () => {
      const result = GlossaryTerms(undefined);
      expect(result).toMatchSnapshot();
    });
});
