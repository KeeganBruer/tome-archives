import { BookImage, CheckCircle, Circle, FileText } from 'lucide-react';

export default function ComicVolueTypePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
          <BookImage className="h-4 w-4" />
          comic_volume
        </div>
        <p className="text-muted-foreground">
          A complete comic book, graphic novel, or manga volume. A standalone, single-volume publication with rich metadata support. No chapters.json needed.
        </p>
      </div>

      <div className="space-y-8">
        {/* Required Fields */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Required Fields
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">type</code>
              <p className="text-sm text-muted-foreground mt-1">
                Must be set to <code className="bg-background px-1.5 py-0.5 rounded">&quot;comic_volume&quot;</code>
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">title</code>
              <p className="text-sm text-muted-foreground mt-1">
                The comic title
              </p>
            </div>
          </div>
        </div>

        {/* Optional Fields */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Circle className="h-5 w-5 text-muted-foreground" />
            Optional Fields
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">authors</code>
              <p className="text-sm text-muted-foreground mt-1">
                Array of creator names (writers, artists, etc.)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">description</code>
              <p className="text-sm text-muted-foreground mt-1">
                Synopsis or summary
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">issue_number</code>
              <p className="text-sm text-muted-foreground mt-1">
                Issue number (for comic series)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">volume_number</code>
              <p className="text-sm text-muted-foreground mt-1">
                Volume number (for manga/collections)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">series</code>
              <p className="text-sm text-muted-foreground mt-1">
                Series name
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">publisher</code>
              <p className="text-sm text-muted-foreground mt-1">
                Publisher name
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">published_date</code>
              <p className="text-sm text-muted-foreground mt-1">
                ISO 8601 publication date
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">cover_image</code>
              <p className="text-sm text-muted-foreground mt-1">
                Path to cover image (often same as first page)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">page_count</code>
              <p className="text-sm text-muted-foreground mt-1">
                Total number of pages (number)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">reading_direction</code>
              <p className="text-sm text-muted-foreground mt-1">
                &quot;ltr&quot; (left-to-right) or &quot;rtl&quot; (right-to-left, for manga)
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">top-down</code>
              <p className="text-sm text-muted-foreground mt-1 font-bold">
                boolean
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">language</code>
              <p className="text-sm text-muted-foreground mt-1">
                ISO 639-1 language code
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <code className="text-sm font-mono bg-muted px-2 py-1 rounded">tags</code>
              <p className="text-sm text-muted-foreground mt-1">
                Array of genre/theme tags
              </p>
            </div>
          </div>
        </div>
        
        {/* Example */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Example tome.json</h3>
          <div className="bg-muted rounded-lg p-4">
            <pre className="text-sm overflow-x-auto">
              <code>{`{
  "type": "comic_volume",
  "title": "Super Hero Adventures Vol. 1",
  "series": "Super Hero",
  "volume_number": 1,
  "authors": ["Jane Artist", "John Writer"],
  "publisher": "Comics Inc",
  "description": "The hero faces their greatest challenge yet!",
  "cover_image": "pages/page-001.jpg",
  "page_count": 224,
  "reading_direction": "ltr",
  "published_date": "2024-02-14",
  "language": "en",
  "tags": ["superhero", "action", "adventure"]
}`}</code>
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
}
