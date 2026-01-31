import { facultyData, programsData, libraryResources } from "./data";

export const RAGService = {
    search: (query: string) => {
        const lowerQuery = query.toLowerCase();
        const results: string[] = [];

        // 1. Search Faculty
        const faculty = facultyData.filter(f =>
            f.name.toLowerCase().includes(lowerQuery) ||
            f.subjects.toLowerCase().includes(lowerQuery) ||
            f.designation.toLowerCase().includes(lowerQuery)
        );

        if (faculty.length > 0) {
            results.push(`Found ${faculty.length} faculty members matching your query:`);
            faculty.slice(0, 3).forEach(f => {
                results.push(`- ${f.name} (${f.designation}) - Specializes in ${f.subjects}`);
            });
            if (faculty.length > 3) results.push(`...and ${faculty.length - 3} others.`);
        }

        // 2. Search Programs
        const allPrograms = [...programsData.it, ...programsData.cs];
        const programs = allPrograms.filter(p =>
            p.title.toLowerCase().includes(lowerQuery) ||
            p.description.toLowerCase().includes(lowerQuery) ||
            p.tags.some(t => t.toLowerCase().includes(lowerQuery))
        );

        if (programs.length > 0) {
            results.push(`\nRelevant Programs:`);
            programs.forEach(p => {
                results.push(`- **${p.title}**: ${p.description}`);
            });
        }

        // 3. Search E-Library
        const resources = libraryResources.filter(r =>
            r.title.toLowerCase().includes(lowerQuery) ||
            r.category.toLowerCase().includes(lowerQuery)
        );

        if (resources.length > 0) {
            results.push(`\nLibrary Documents:`);
            resources.forEach(r => {
                results.push(`- [${r.category}] ${r.title} (${r.date})`);
            });
        }

        return results.join("\n");
    },

    generateResponse: async (query: string): Promise<string> => {
        // Simulate network delay for realism
        await new Promise(resolve => setTimeout(resolve, 800));

        const context = RAGService.search(query);

        if (!context) {
            // Fallback generic responses
            if (query.match(/hello|hi|hey/i)) return "Hello! I am the Department AI Assistant. I can help you find information about our Faculty, Programs, or E-Library resources. How can I assist you today?";
            if (query.match(/apply|admission/i)) return "You can apply to our programs by clicking the 'Apply Now' button in the navigation bar.";
            if (query.match(/contact|location/i)) return "You can reach us via the Contact section at the bottom of the page.";

            return "I'm sorry, I couldn't find specific information matching your query in our database. I can help with:\n- Finding Faculty (e.g., 'Who teaches AI?')\n- Program Details (e.g., 'B.Sc. IT details')\n- Library Resources (e.g., 'Syllabus')";
        }

        return `Here is what I found regarding "${query}":\n\n${context}`;
    }
};
