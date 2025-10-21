# Tome Editor

A NextJS site that allows you to select a .tome file from your computer files.

A tome file is a ZIP archive with a .tome file extension. A .tome ZIP archive contains a tome.json at the root of the file.

I would like to create a text editor to be able to edit the tome.json file in the archive without having to unzip and zip it myself.

---

## Detailed Implementation Plan

### 1. Project Overview

**Goal:** Create a web-based editor that allows users to:
- Upload/select a `.tome` file (ZIP archive)
- Extract and display the `tome.json` file from within the archive
- Edit the JSON content with a rich text editor
- Save changes back into the `.tome` archive
- Download the modified `.tome` file

**Tech Stack:**
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **ZIP Handling:** JSZip (client-side ZIP manipulation)
- **JSON Editor:** Monaco Editor (VS Code's editor) or CodeMirror
- **UI Components:** Tailwind CSS + shadcn/ui
- **Validation:** Zod (for JSON schema validation)

---

### 2. Core Features & User Flow

#### Phase 1: File Upload & Display
1. **Landing Page**
   - Clean UI with file upload area (drag-and-drop + file picker)
   - Accept only `.tome` file extensions
   - Display file info (name, size) after selection

2. **File Processing**
   - Read the uploaded `.tome` file as a ZIP archive
   - Extract `tome.json` from the root of the archive
   - Parse JSON and display in the editor
   - Handle errors (missing tome.json, invalid JSON, corrupt ZIP)

3. **Editor Display**
   - Monaco Editor or CodeMirror with JSON syntax highlighting
   - Line numbers, syntax validation
   - Format/prettify button
   - Read-only mode toggle (optional)

#### Phase 2: Editing & Validation
4. **JSON Editing**
   - Real-time syntax validation
   - Error indicators for invalid JSON
   - Auto-formatting options
   - Undo/redo support

5. **Schema Validation (Optional)**
   - Define expected tome.json schema
   - Validate against schema on edit
   - Show validation errors/warnings

#### Phase 3: Saving & Export
6. **Save Changes**
   - Update tome.json in the ZIP archive
   - Preserve all other files in the archive
   - Generate new `.tome` file

7. **Download**
   - Trigger browser download of modified `.tome` file
   - Maintain original filename or allow rename
   - Option to discard changes and re-upload

---

### 3. Technical Architecture

#### File Structure
```
TomeEditor/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Main editor page
│   │   ├── layout.tsx               # Root layout
│   │   └── globals.css              # Global styles
│   ├── components/
│   │   ├── FileUploader.tsx         # File upload component
│   │   ├── JsonEditor.tsx           # Monaco/CodeMirror wrapper
│   │   ├── ErrorDisplay.tsx         # Error handling UI
│   │   ├── ActionBar.tsx            # Save/Download/Reset buttons
│   │   └── ui/                      # shadcn/ui components
│   ├── lib/
│   │   ├── tomeHandler.ts           # ZIP extraction/creation logic
│   │   ├── jsonValidator.ts         # JSON validation utilities
│   │   └── types.ts                 # TypeScript types
│   └── hooks/
│       ├── useTomeFile.ts           # Custom hook for tome file state
│       └── useJsonEditor.ts         # Editor state management
├── public/
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

#### Key Components

**1. FileUploader Component**
- Handles drag-and-drop and file input
- Validates file extension
- Triggers file processing

**2. JsonEditor Component**
- Wraps Monaco Editor or CodeMirror
- Props: content, onChange, readOnly
- Handles syntax highlighting and validation

**3. TomeHandler Utility (`lib/tomeHandler.ts`)**
```typescript
- loadTomeFile(file: File): Promise<{ json: string, zip: JSZip }>
- updateTomeJson(zip: JSZip, newJson: string): JSZip
- downloadTome(zip: JSZip, filename: string): void
```

**4. State Management**
- Use React state or Zustand for:
  - Current tome file (ZIP object)
  - JSON content (string)
  - Editor state (modified, valid)
  - Error messages

---

### 4. Implementation Steps

#### Step 1: Project Setup
- [ ] Initialize Next.js project with TypeScript
- [ ] Install dependencies: jszip, @monaco-editor/react (or @uiw/react-codemirror), tailwind, shadcn/ui
- [ ] Configure Tailwind CSS
- [ ] Set up basic layout and routing

#### Step 2: File Upload UI
- [ ] Create FileUploader component with drag-and-drop
- [ ] Add file validation (extension check)
- [ ] Display file metadata after upload
- [ ] Add loading states

#### Step 3: ZIP Processing
- [ ] Implement tomeHandler.loadTomeFile()
- [ ] Extract tome.json from ZIP
- [ ] Handle edge cases (missing file, invalid ZIP)
- [ ] Add error handling and user feedback

#### Step 4: JSON Editor Integration
- [ ] Integrate Monaco Editor or CodeMirror
- [ ] Configure JSON syntax highlighting
- [ ] Add real-time validation
- [ ] Implement format/prettify functionality

#### Step 5: Save & Download
- [ ] Implement tomeHandler.updateTomeJson()
- [ ] Create new ZIP with modified JSON
- [ ] Implement download functionality
- [ ] Add "discard changes" option

#### Step 6: Polish & Error Handling
- [ ] Add comprehensive error messages
- [ ] Implement toast notifications
- [ ] Add keyboard shortcuts (Ctrl+S to save, etc.)
- [ ] Responsive design for mobile
- [ ] Add confirmation dialogs for destructive actions

#### Step 7: Optional Enhancements
- [ ] Dark mode support
- [ ] JSON schema validation
- [ ] Recent files list (localStorage)
- [ ] Diff view (show changes)
- [ ] Export as regular JSON file
- [ ] Archive explorer (view other files in .tome)

---

### 5. Libraries & Dependencies

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "jszip": "^3.10.1",
    "@monaco-editor/react": "^4.6.0",
    "zod": "^3.23.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.5.0"
  },
  "devDependencies": {
    "@types/node": "^22.10.0",
    "@types/react": "^18.3.0",
    "typescript": "^5.7.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

---

### 6. Security & Performance Considerations

**Security:**
- All processing happens client-side (no server upload)
- Validate file types and sizes
- Sanitize JSON before parsing
- Consider CSP headers

**Performance:**
- Limit file size (e.g., max 50MB)
- Lazy load Monaco Editor
- Use Web Workers for ZIP processing (optional)
- Debounce validation during typing

**Browser Compatibility:**
- Test with File API, Blob API
- Ensure JSZip works in target browsers
- Fallback for older browsers

---

### 7. Error Handling Scenarios

1. **Invalid file type** → Show error: "Please select a .tome file"
2. **Corrupt ZIP** → "Unable to read .tome file. File may be corrupted"
3. **Missing tome.json** → "tome.json not found in archive root"
4. **Invalid JSON** → Show syntax errors with line numbers
5. **Large files** → "File size exceeds maximum limit"
6. **Browser compatibility** → "Your browser does not support this feature"

---

### 8. Future Enhancements

- Multi-file editing (edit multiple files in .tome archive)
- Visual JSON editor (tree view)
- Cloud storage integration (Google Drive, Dropbox)
- Collaborative editing (real-time with WebSockets)
- Version history
- Export to different formats
- Plugin system for custom validators

---

## Summary

This plan provides a comprehensive roadmap for building the Tome Editor. The implementation is split into manageable phases, starting with core functionality (upload, edit, download) and progressing to enhancements. All processing happens client-side for privacy and speed, using modern web APIs and libraries.