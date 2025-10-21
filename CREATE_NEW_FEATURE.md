# Create New .tome File Feature

## Overview

This feature allows users to create a brand new `.tome` file from scratch with a pre-populated template, without needing to manually create and zip files.

## How to Use

### Method 1: From Upload Screen

1. On the main upload screen, click the **"Create New"** button next to "Choose File"
2. Enter a filename in the dialog (e.g., "my-project")
3. Click **"Create"**
4. The editor will load with a pre-populated template

### Method 2: From Header

1. Click the **"Create New"** button in the top-right corner of the header
2. This button is always visible, even when editing an existing file
3. Enter a filename and click **"Create"**
4. The editor will load with a new template

## Template Structure

When you create a new .tome file, it comes with the following JSON template:

```json
{
  "name": "",
  "version": "1.0.0",
  "description": "",
  "author": "",
  "created": "2025-10-19",
  "metadata": {}
}
```

### Template Fields

- **name**: Project/tome name (empty by default)
- **version**: Semantic version (defaults to "1.0.0")
- **description**: Description of the tome (empty by default)
- **author**: Author name (empty by default)
- **created**: Automatically set to today's date
- **metadata**: Empty object for custom properties

## Features

### Filename Validation

- Automatically adds `.tome` extension if not provided
- Validates filename characters (letters, numbers, spaces, hyphens, underscores, dots)
- Shows error if filename is empty or contains invalid characters

### Dialog Features

- **Auto-focus**: Input field is automatically focused when dialog opens
- **Keyboard shortcuts**:
  - `Enter` - Create the file
  - `Escape` - Cancel and close dialog
- **Template preview**: Shows what fields are included in the template

### After Creation

Once created:
1. The tome.json template loads into the Monaco editor
2. You can immediately edit the JSON
3. All normal features work: save, download, format, reset
4. The file is marked as "Saved" initially (not modified)

## Technical Details

### File Structure

The created .tome file is:
- A ZIP archive with `.tome` extension
- Contains a single file: `tome.json` at the root
- The tome.json contains the formatted template

### Implementation

**Components:**
- `CreateTomeDialog.tsx` - Modal dialog for filename input
- `FileUploader.tsx` - Updated with "Create New" button
- `app/page.tsx` - Updated header with "Create New" button

**Utilities:**
- `lib/tomeHandler.ts::createNewTome()` - Creates new ZIP with template
- `hooks/useTomeFile.ts::createNew()` - Hook method for creating new files

**Types:**
- `TomeJsonTemplate` - TypeScript interface for the template structure

### UI Components Used

- Dialog, DialogContent, DialogHeader, etc. (from `components/ui/dialog.tsx`)
- Input (from `components/ui/input.tsx`)
- Label (from `components/ui/label.tsx`)
- Button (from `components/ui/button.tsx`)

## Example Workflow

### Creating a New Project

1. Click **"Create New"**
2. Enter filename: `my-game-data`
3. Click **"Create"**
4. Edit the template:
   ```json
   {
     "name": "My Game Data",
     "version": "1.0.0",
     "description": "Data file for my awesome game",
     "author": "John Doe",
     "created": "2025-10-19",
     "metadata": {
       "gameVersion": "2.3.1",
       "difficulty": "hard"
     }
   }
   ```
5. Click **"Save Changes"**
6. Click **"Download"** to get `my-game-data.tome`

### Starting Fresh While Editing

1. You're editing `project-a.tome`
2. Click **"Create New"** in the header
3. Enter `project-b`
4. The editor switches to the new file
5. Your original `project-a.tome` changes are preserved (you can re-upload it later)

## Error Handling

### Invalid Filename

**Error**: "Filename contains invalid characters"
- **Cause**: Special characters like `/`, `\`, `:`, `*`, etc.
- **Solution**: Use only letters, numbers, spaces, hyphens, and underscores

### Empty Filename

**Error**: "Please enter a filename"
- **Cause**: Submitted without entering a filename
- **Solution**: Enter a valid filename

### Creation Failure

**Error**: "Failed to create new .tome file"
- **Cause**: Unexpected error during creation
- **Solution**: Try again or refresh the page

## Benefits

1. **No manual ZIP creation**: Don't need to create files and zip them manually
2. **Consistent structure**: Always starts with the correct template
3. **Fast prototyping**: Quickly create new tome files for testing
4. **No external tools needed**: Everything happens in the browser
5. **Template guidance**: Shows what fields are commonly used

## Customization

### Changing the Template

To customize the default template, edit `lib/tomeHandler.ts`:

```typescript
function getTomeJsonTemplate(): TomeJsonTemplate {
  return {
    name: '',
    version: '1.0.0',
    description: '',
    author: '',
    created: new Date().toISOString().split('T')[0],
    metadata: {},
    // Add your custom fields here
    customField: 'value',
  };
}
```

### Adding More Fields

Update both:
1. `lib/types.ts::TomeJsonTemplate` interface
2. `lib/tomeHandler.ts::getTomeJsonTemplate()` function

## Privacy & Security

- **Client-side only**: No server involved in creating files
- **No data storage**: Templates are generated fresh each time
- **Safe defaults**: Template contains no sensitive data
- **Validation**: Filename is validated before creation

## Future Enhancements

Potential improvements:
- [ ] Multiple template options (game data, config file, etc.)
- [ ] Custom template editor
- [ ] Import template from existing .tome file
- [ ] Add more files to the archive during creation
- [ ] Template library with pre-made templates
