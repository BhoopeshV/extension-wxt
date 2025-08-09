import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';

// CSS is now loaded via HTML link tag

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="p-6 space-y-4 min-h-screen bg-background text-foreground">
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">JIRA Extension</CardTitle>
          <CardDescription>Testing shadcn/ui components integration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Test Input:</label>
            <Input 
              placeholder="Type something here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {inputValue && (
              <p className="text-sm text-muted-foreground">You typed: {inputValue}</p>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Button Variants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-wrap">
            <Button>Primary (Amber)</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Mount React app to root div
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}