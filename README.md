# Install the related dependencies

npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom @types/jest

# Change the vite.config.ts file
```
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts', // optional: for custom setup
  },
});
```

## setup file should be src/test/setup.ts
```
// src/test/setup.ts
import '@testing-library/jest-dom';
```

# Add script

```
"test": "vitest"
```

# Run the script

```
npm run dev
```