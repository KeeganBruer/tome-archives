import { Archive, BookOpen, CheckCircle, Circle, FileJson, FileImage, Zap } from 'lucide-react';

export default function CBZPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          <Archive className="h-4 w-4" />
          CBZ to Tome Conversion
        </div>
        <p className="text-muted-foreground">
          Learn how to convert traditional CBZ (Comic Book ZIP) files into modern comic_chapter tome archives for better interoperability and metadata support.
        </p>
      </div>

      <div className="space-y-8">
        {/* Overview */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="bg-muted/50 border rounded-lg p-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              CBZ files are standard ZIP archives containing comic book images, typically used by readers like ComiXology and Calibre. While CBZ is a ubiquitous format, it lacks standardized metadata support and reading direction information.
            </p>
            <p className="text-sm text-muted-foreground">
              By converting CBZ files to comic_chapter tome format, you gain:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-1">✓</span>
                <span>Structured metadata (authors, publication date, chapter info)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-1">✓</span>
                <span>Reading direction support (LTR and RTL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-1">✓</span>
                <span>Optional page-level metadata</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-1">✓</span>
                <span>Better archival and organization capabilities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step-by-step Conversion */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Conversion Steps</h2>
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="font-semibold text-sm mb-2">Step 1: Extract CBZ Contents</h3>
              <p className="text-sm text-muted-foreground mb-3">
                CBZ files are ZIP archives. Extract all contents to a working directory:
              </p>
              <div className="bg-background rounded border p-3 text-xs font-mono">
                <div className="text-muted-foreground"># Linux/Mac</div>
                <div className="text-primary">unzip comic.cbz -d comic-extracted/</div>
                <div className="mt-2 text-muted-foreground"># Or use any ZIP tool on Windows</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="font-semibold text-sm mb-2">Step 2: Organize Image Files</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Move all extracted images into a <code className="bg-background px-1.5 py-0.5 rounded">pages/</code> directory and ensure they are properly ordered:
              </p>
              <div className="bg-background rounded border p-3 text-xs font-mono space-y-1">
                <div>my-chapter/</div>
                <div className="ml-2">├── pages/</div>
                <div className="ml-4">│   ├── page-001.jpg</div>
                <div className="ml-4">│   ├── page-002.jpg</div>
                <div className="ml-4">│   ├── page-003.jpg</div>
                <div className="ml-4">│   └── ...</div>
                <div className="ml-2">└── tome.json</div>
              </div>
              <div className="mt-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-3">
                <p className="text-xs text-blue-900 dark:text-blue-100">
                  <strong>Tip:</strong> Name files with leading zeros (page-001, page-002) to ensure proper alphabetical sorting.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="font-semibold text-sm mb-2">Step 3: Create tome.json Metadata</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Create a <code className="bg-background px-1.5 py-0.5 rounded">tome.json</code> file with required and optional metadata:
              </p>
              <div className="bg-background rounded border p-3 text-xs font-mono overflow-x-auto">
                <pre>{`{
  "type": "comic_chapter",
  "title": "Chapter Name",
  "chapter_number": 1,
  "comic_title": "Series Title",
  "authors": ["Author Name"],
  "description": "Brief description of the chapter",
  "cover_image": "pages/page-001.jpg",
  "page_count": 25,
  "reading_direction": "ltr",
  "published_date": "2024-01-15",
  "language": "en",
  "tags": ["action", "sci-fi"]
}`}</pre>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="font-semibold text-sm mb-2">Step 4 (Optional): Create pages.json</h3>
              <p className="text-sm text-muted-foreground mb-3">
                For enhanced functionality, create a <code className="bg-background px-1.5 py-0.5 rounded">pages.json</code> file with page-level metadata:
              </p>
              <div className="bg-background rounded border p-3 text-xs font-mono overflow-x-auto">
                <pre>{`[
  {
    "page": 1,
    "file": "pages/page-001.jpg",
    "width": 800,
    "height": 1200,
    "type": "cover"
  },
  {
    "page": 2,
    "file": "pages/page-002.jpg",
    "width": 800,
    "height": 1200,
    "type": "story"
  }
]`}</pre>
              </div>
            </div>

            {/* Step 5 */}
            <div className="border-l-4 border-primary pl-4 py-2">
              <h3 className="font-semibold text-sm mb-2">Step 5: Create Tome Archive</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Compress the directory into a .tome file (which is a ZIP archive with a different extension):
              </p>
              <div className="bg-background rounded border p-3 text-xs font-mono space-y-2">
                <div className="text-muted-foreground"># Linux/Mac</div>
                <div className="text-primary">zip -r my-chapter.tome my-chapter/</div>
                <div className="mt-2 text-muted-foreground"># Or rename a .zip file to .tome</div>
                <div className="text-primary">zip -r my-chapter.zip my-chapter/ && mv my-chapter.zip my-chapter.tome</div>
              </div>
            </div>
          </div>
        </div>

        {/* Directory Structure */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileImage className="h-5 w-5 text-primary" />
            Final Directory Structure
          </h2>
          <div className="bg-muted/50 border rounded-lg p-6">
            <div className="bg-background rounded border p-4 text-xs font-mono space-y-1">
              <div className="text-muted-foreground">my-chapter.tome (ZIP archive)</div>
              <div className="ml-2">├── tome.json</div>
              <div className="ml-2">├── pages.json (optional)</div>
              <div className="ml-2">└── pages/</div>
              <div className="ml-4">    ├── page-001.jpg</div>
              <div className="ml-4">    ├── page-002.jpg</div>
              <div className="ml-4">    ├── page-003.jpg</div>
              <div className="ml-4">    └── ... (all pages)</div>
            </div>
          </div>
        </div>

        {/* Metadata Reference */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileJson className="h-5 w-5 text-primary" />
            Metadata Reference
          </h2>
          <div className="space-y-6">
            {/* Required Fields */}
            <div>
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Required Fields
              </h3>
              <div className="space-y-3">
                <div className="border-l-2 border-primary pl-4">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">type</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    Must be <code className="bg-background px-1.5 py-0.5 rounded">&quot;comic_chapter&quot;</code>
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">title</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    The chapter title (derived from CBZ filename or metadata if available)
                  </p>
                </div>
              </div>
            </div>

            {/* Recommended Fields */}
            <div>
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-600" />
                Recommended Fields
              </h3>
              <div className="space-y-3">
                <div className="border-l-2 border-amber-500 pl-4">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">chapter_number</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sequential chapter number for ordering
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">comic_title</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    Title of the parent series/comic
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">authors</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    Array of creator names (artist, writer, etc.)
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">reading_direction</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    <code className="bg-background px-1.5 py-0.5 rounded">&quot;ltr&quot;</code> (left-to-right, default) or <code className="bg-background px-1.5 py-0.5 rounded">&quot;rtl&quot;</code> (right-to-left for manga)
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">page_count</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    Total number of pages in the chapter
                  </p>
                </div>
              </div>
            </div>

            {/* Optional Fields */}
            <div>
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Circle className="h-4 w-4 text-muted-foreground" />
                Optional Fields
              </h3>
              <div className="space-y-3">
                <div className="border-l-2 border-muted pl-4">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">description</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    Chapter synopsis or summary
                  </p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">cover_image</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    Path to cover image (typically first page)
                  </p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">published_date</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    ISO 8601 format (YYYY-MM-DD)
                  </p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">language</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    ISO 639-1 language code (en, es, ja, etc.)
                  </p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">tags</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    Array of genre/category tags
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Tips */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Automation Tips</h2>
          <div className="bg-muted/50 border rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-sm mb-2">Batch Processing</h3>
              <p className="text-sm text-muted-foreground mb-3">
                For converting multiple CBZ files, consider:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Writing a shell script to automate extraction and renaming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Using Python to parse CBZ metadata (if available) and generate tome.json</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Leveraging tools like ComicTagger to extract existing metadata</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
              <p className="text-xs text-blue-900 dark:text-blue-100">
                <strong>Note:</strong> Some CBZ files may contain metadata in XML or JSON within the archive. Extract and adapt this metadata when creating your tome.json file.
              </p>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Best Practices</h2>
          <div className="space-y-3">
            <div className="bg-muted/50 border-l-4 border-primary rounded-lg p-4">
              <p className="text-sm font-semibold mb-1">Use Consistent Naming</p>
              <p className="text-sm text-muted-foreground">
                Name page files consistently with leading zeros: page-001.jpg, page-002.jpg, etc.
              </p>
            </div>
            <div className="bg-muted/50 border-l-4 border-primary rounded-lg p-4">
              <p className="text-sm font-semibold mb-1">Preserve Original Metadata</p>
              <p className="text-sm text-muted-foreground">
                Include author names, publication dates, and language information if available from the original CBZ.
              </p>
            </div>
            <div className="bg-muted/50 border-l-4 border-primary rounded-lg p-4">
              <p className="text-sm font-semibold mb-1">Set Reading Direction</p>
              <p className="text-sm text-muted-foreground">
                Correctly set reading_direction based on the comic origin: &quot;ltr&quot; for Western comics, &quot;rtl&quot; for manga.
              </p>
            </div>
            <div className="bg-muted/50 border-l-4 border-primary rounded-lg p-4">
              <p className="text-sm font-semibold mb-1">Optimize Image Quality</p>
              <p className="text-sm text-muted-foreground">
                Consider re-compressing images if the original CBZ is using excessive quality. Balance file size with readability.
              </p>
            </div>
            <div className="bg-muted/50 border-l-4 border-primary rounded-lg p-4">
              <p className="text-sm font-semibold mb-1">Optional Page Metadata</p>
              <p className="text-sm text-muted-foreground">
                Create pages.json for better reader integration, especially if you have information about double-spreads or special pages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
