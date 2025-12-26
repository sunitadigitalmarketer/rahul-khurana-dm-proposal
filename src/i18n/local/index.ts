const modules = import.meta.glob('./*/*.ts', { eager: true });

const messages: Record<string, { translation: Record<string, string> }> = {};

// Default English translations if no files found
const defaultMessages = {
  en: { translation: { welcome: "Welcome" } }
};

Object.keys(modules).forEach((path) => {
  const match = path.match(/\.\/([^/]+)\/([^/]+)\.ts$/);
  if (match) {
    const [, lang] = match;
    const module = modules[path] as { default?: Record<string, string> };
    
    if (!messages[lang]) {
      messages[lang] = { translation: {} };
    }
    
    // Merge translation content
    if (module.default) {
      messages[lang].translation = {
        ...messages[lang].translation,
        ...module.default
      };
    }
  }
});

// If no translations found, use defaults
if (Object.keys(messages).length === 0) {
  Object.assign(messages, defaultMessages);
}

export default messages; 