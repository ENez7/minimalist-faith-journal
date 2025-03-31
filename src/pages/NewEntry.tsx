
import { useState } from "react";
import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";

const NewEntry = () => {
  const [entryType, setEntryType] = useState("journal");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  // Additional fields for scripture entries
  const [scriptureReference, setScriptureReference] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would save the entry to a database
    console.log({
      type: entryType,
      title,
      content,
      scriptureReference: entryType === "scripture" ? scriptureReference : undefined,
      date: new Date().toISOString(),
    });
    
    toast({
      title: "Entry Saved",
      description: "Your faith journal entry has been saved successfully.",
    });
    
    // Reset form
    setTitle("");
    setContent("");
    setScriptureReference("");
  };
  
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-serif font-normal text-faith-900 mb-4">New Entry</h1>
          <p className="text-faith-900/70">Record your thoughts, prayers, or scripture reflections.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>Entry Type</Label>
            <RadioGroup
              defaultValue="journal"
              value={entryType}
              onValueChange={setEntryType}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="journal" id="journal" />
                <Label htmlFor="journal" className="cursor-pointer">Journal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="scripture" id="scripture" />
                <Label htmlFor="scripture" className="cursor-pointer">Scripture</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="prayer" id="prayer" />
                <Label htmlFor="prayer" className="cursor-pointer">Prayer</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Entry title"
              className="border-faith-200/30 focus:border-faith-900/20"
            />
          </div>
          
          {entryType === "scripture" && (
            <div className="space-y-2">
              <Label htmlFor="scripture">Scripture Reference</Label>
              <Input
                id="scripture"
                value={scriptureReference}
                onChange={(e) => setScriptureReference(e.target.value)}
                placeholder="e.g., John 3:16, Psalm 23"
                className="border-faith-200/30 focus:border-faith-900/20"
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="content">
              {entryType === "journal" && "Your Thoughts"}
              {entryType === "scripture" && "Your Reflection"}
              {entryType === "prayer" && "Your Prayer"}
            </Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={
                entryType === "journal" 
                  ? "Share your thoughts and reflections..."
                  : entryType === "scripture"
                  ? "What is God showing you in this passage?"
                  : "Write your prayer here..."
              }
              className="min-h-[200px] border-faith-200/30 focus:border-faith-900/20"
            />
          </div>
          
          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-faith-900 hover:bg-faith-900/90 text-white"
            >
              Save Entry
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default NewEntry;
