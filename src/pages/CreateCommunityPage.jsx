import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Button } from '../components/ui/button';

function CreateCommunityPage() {
  const [activeTab, setActiveTab] = useState('banner');
  const [formData, setFormData] = useState({
    name: '',
    uniqueId: '',
    description: '',
    banner: null,
    logo: null
  });
  const navigate = useNavigate();

  const handleImageChange = (type, e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, [type]: file });
      if (type === 'banner') {
        setActiveTab('logo');
      }
    }
  };

  const generateUniqueId = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setFormData({
      ...formData,
      name,
      uniqueId: generateUniqueId(name)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement community creation logic
    navigate('/communities/1');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Create Community</h1>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="w-full">
                <TabsTrigger value="banner" className="flex-1">Banner</TabsTrigger>
                <TabsTrigger value="logo" className="flex-1">Logo</TabsTrigger>
                <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
              </TabsList>

              <TabsContent value="banner">
                <div className="aspect-[3/1] rounded-lg border-2 border-dashed border-border bg-muted/50 flex flex-col items-center justify-center p-6">
                  {formData.banner ? (
                    <img
                      src={URL.createObjectURL(formData.banner)}
                      alt="Banner preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <PhotoIcon className="h-12 w-12 text-muted-foreground mb-4" />
                      <div className="text-center">
                        <label className="text-primary hover:text-primary/80 cursor-pointer">
                          Upload banner image
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleImageChange('banner', e)}
                          />
                        </label>
                        <p className="text-sm text-muted-foreground mt-2">
                          Recommended size: 1200x400px
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="logo">
                <div className="w-40 h-40 mx-auto rounded-lg border-2 border-dashed border-border bg-muted/50 flex flex-col items-center justify-center">
                  {formData.logo ? (
                    <img
                      src={URL.createObjectURL(formData.logo)}
                      alt="Logo preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <PhotoIcon className="h-8 w-8 text-muted-foreground mb-2" />
                      <label className="text-primary hover:text-primary/80 cursor-pointer text-sm">
                        Upload logo
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => handleImageChange('logo', e)}
                        />
                      </label>
                    </>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Community Name
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder="Enter community name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Community Unique ID
                  </label>
                  <input
                    type="text"
                    className="input-field bg-muted"
                    value={formData.uniqueId}
                    disabled
                    placeholder="Auto-generated from name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Community Description
                  </label>
                  <textarea
                    className="input-field min-h-[120px]"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your community..."
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <Button
                className="w-full"
                size="lg"
                onClick={handleSubmit}
                disabled={!formData.name || !formData.banner || !formData.logo}
              >
                Create Community
              </Button>
            </div>
          </div>

          {/* Instructions Box */}
          <div className="col-span-1">
            <div className="bg-muted/30 rounded-lg p-6 sticky top-24">
              <h3 className="font-semibold mb-4">Instructions</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Upload a banner image that represents your community</li>
                <li>• Choose a clear, recognizable logo</li>
                <li>• Pick a unique, memorable name</li>
                <li>• Write a clear description of your community's purpose</li>
                <li>• The unique ID will be automatically generated from your community name</li>
                <li>• All fields are required to create your community</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCommunityPage;