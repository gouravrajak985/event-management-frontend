import { Link } from 'react-router-dom';
import { UserGroupIcon, PlusIcon } from '@heroicons/react/24/outline';

function CommunitiesPage() {
  const communities = [
    {
      id: 1,
      name: "Tech Innovators",
      members: 250,
      description: "A community for tech enthusiasts and innovators",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      name: "Design Hub",
      members: 180,
      description: "Connect with fellow designers and creatives",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      name: "Startup Network",
      members: 320,
      description: "For entrepreneurs and startup enthusiasts",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 4,
      name: "Creative Arts",
      members: 150,
      description: "Explore and share artistic endeavors",
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="pl-20 pt-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Communities</h1>
          <Link
            to="/communities/create"
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Create Community
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <Link
              key={community.id}
              to={`/communities/${community.id}`}
              className="group"
            >
              <div className="card hover:bg-muted/50 transition-colors">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-lg mb-2">{community.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {community.description}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <UserGroupIcon className="h-4 w-4 mr-2" />
                  {community.members} members
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommunitiesPage;