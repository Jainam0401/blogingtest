// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const domains = [
  'source.unsplash.com',
  'randomuser.me',
  'images.unsplash.com',
];

function getRandomImage(): string {
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];

  switch (randomDomain) {
    case 'source.unsplash.com':
      const width = 800;
      const height = 600;
      const randomId = Math.floor(Math.random() * 1000);
      return `https://source.unsplash.com/${width}x${height}/?technology,code,web&${randomId}`;

    case 'randomuser.me':
      return `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 70)}.jpg`;

    case 'images.unsplash.com':
      const imageIds = [
        'aIYuhNasu60',
        'cckf4XjuZcA',
        'MTZip_7pVs0',
        'u3WmDyKqIUY',
        'gCvSvVFIqkQ',
        'npxXWgQ33ZQ',
        '8xPfQPqT9s0',
        'VDV_deQ1Mzg',
        'oZe1K9BFDLE',
        'hpjSkU2UYSU',
      ];
      const randomImageId = imageIds[Math.floor(Math.random() * imageIds.length)];
      return `https://images.unsplash.com/photo-${randomImageId}?w=800&h=600&fit=crop`;

    default:
      return `https://source.unsplash.com/800x600/?blog`;
  }
}

const blogsUser1 = [
  {
    title: 'Getting Started with Next.js 14',
    content: `Next.js 14 brings exciting new features and improvements to the React ecosystem. 
    In this comprehensive guide, we'll explore server components, the new app router, and how to leverage 
    the latest performance optimizations. Learn how to build faster, more efficient applications with Next.js 14.
    
    Key topics we'll cover include:
    - Server Components and Server Actions
    - App Router fundamentals
    - Dynamic routes and layouts
    - Image optimization and font loading
    - API routes and middleware
    
    Whether you're building a simple blog or a complex web application, Next.js 14 provides 
    the tools you need to succeed.`,
    tags: ['nextjs', 'react', 'javascript', 'web-development'],
    postedBy: 'Sarah Anderson',
  },
  {
    title: 'Mastering GraphQL: A Developer\'s Guide',
    content: `GraphQL has revolutionized how we build APIs. Unlike traditional REST endpoints, 
    GraphQL allows clients to request exactly the data they need, nothing more, nothing less.
    
    This guide will take you through:
    - Understanding the GraphQL type system
    - Writing efficient queries and mutations
    - Setting up GraphQL servers with Apollo
    - Authentication and authorization patterns
    - Performance optimization and caching strategies
    
    By the end of this article, you'll have a solid understanding of GraphQL principles 
    and be ready to build scalable API solutions.`,
    tags: ['graphql', 'api', 'backend', 'apollo'],
    postedBy: 'Sarah Anderson',
  },
  {
    title: 'React Hooks: From Basics to Advanced',
    content: `React Hooks transformed how we write React components. They enable us to use state and 
    other React features without writing class components.
    
    We'll explore:
    - useState and useEffect fundamentals
    - useContext for state management
    - Creating custom hooks
    - Performance optimization with useMemo and useCallback
    - Advanced patterns like useReducer
    
    Understanding hooks deeply will make you a more effective React developer and help you 
    write cleaner, more maintainable code.`,
    tags: ['react', 'hooks', 'javascript', 'frontend'],
    postedBy: 'Sarah Anderson',
  },
  {
    title: 'TypeScript Best Practices in 2024',
    content: `TypeScript continues to evolve and improve. In 2024, there are more reasons than ever 
    to adopt TypeScript in your projects.
    
    This article covers:
    - Setting up TypeScript in modern projects
    - Advanced type system features
    - Generics and utility types
    - Type guards and narrowing
    - Common pitfalls and how to avoid them
    
    Strong typing can catch bugs early, improve IDE support, and make your code self-documenting.`,
    tags: ['typescript', 'javascript', 'type-safety', 'best-practices'],
    postedBy: 'Sarah Anderson',
  },
  {
    title: 'Building Scalable Node.js Applications',
    content: `Node.js has become a powerhouse for building backend applications. Building scalable 
    applications requires understanding architecture patterns and best practices.
    
    Topics include:
    - Microservices architecture
    - Database design for scale
    - Caching strategies
    - Load balancing and clustering
    - Monitoring and logging
    
    Learn how to build applications that can handle millions of users and scale gracefully.`,
    tags: ['nodejs', 'backend', 'scalability', 'architecture'],
    postedBy: 'Sarah Anderson',
  },
  {
    title: 'The Future of Web Development',
    content: `The web development landscape is constantly changing. Looking ahead, we'll see trends 
    that shape how we build applications.
    
    Expected developments:
    - AI-assisted development tools
    - Edge computing becoming mainstream
    - Enhanced web standards
    - WebAssembly adoption
    - Progressive enhancement
    
    Staying informed about these trends will help you stay competitive and make better 
    technology choices for your projects.`,
    tags: ['web-development', 'trends', 'future', 'technology'],
    postedBy: 'Sarah Anderson',
  },
];

const blogsUser2 = [
  {
    title: 'Prisma ORM: Simplifying Database Operations',
    content: `Prisma is a modern ORM that makes working with databases intuitive and type-safe. 
    It provides a clean abstraction over database operations while maintaining the flexibility 
    to write raw queries when needed.
    
    In this guide, we'll cover:
    - Setting up Prisma with various databases
    - Writing models and migrations
    - CRUD operations
    - Relations and foreign keys
    - Transactions and batch operations
    
    Prisma's developer experience is unmatched, with auto-completion and type safety 
    built right into your editor.`,
    tags: ['prisma', 'database', 'orm', 'typescript'],
    postedBy: 'Marcus Thompson',
  },
  {
    title: 'PostgreSQL: A Powerful Database Solution',
    content: `PostgreSQL is one of the most powerful open-source databases available. It offers 
    advanced features, reliability, and excellent performance.
    
    Explore:
    - Setting up and configuring PostgreSQL
    - Advanced query optimization
    - Indexing strategies
    - JSON support and data types
    - Security and access control
    - Backup and recovery procedures
    
    Whether you're building a small project or a large-scale enterprise application, 
    PostgreSQL has the features you need.`,
    tags: ['postgresql', 'database', 'sql', 'backend'],
    postedBy: 'Marcus Thompson',
  },
  {
    title: 'API Authentication with JWT Tokens',
    content: `Securing your APIs is critical. JWT tokens provide a stateless way to authenticate users 
    and authorize requests.
    
    Learn about:
    - JWT fundamentals and how they work
    - Implementing JWT authentication
    - Refresh tokens and token expiration
    - Best practices for token storage
    - OAuth 2.0 integration
    - Common security pitfalls
    
    Proper authentication is the foundation of API security. This guide will help you 
    implement robust authentication in your applications.`,
    tags: ['authentication', 'jwt', 'security', 'api'],
    postedBy: 'Marcus Thompson',
  },
  {
    title: 'Docker: Containerizing Your Applications',
    content: `Docker revolutionized application deployment by introducing containerization. 
    Containers provide consistency across development, testing, and production environments.
    
    We'll explore:
    - Docker basics and concepts
    - Writing Dockerfiles
    - Docker Compose for multi-container applications
    - Container networking and volumes
    - Best practices for production deployments
    - Docker optimization techniques
    
    Mastering Docker will make your deployment process more reliable and efficient.`,
    tags: ['docker', 'devops', 'containerization', 'deployment'],
    postedBy: 'Marcus Thompson',
  },
  {
    title: 'Microservices Architecture Explained',
    content: `Microservices architecture is an approach to developing applications as a suite of 
    small, independent services that communicate over well-defined APIs.
    
    Key concepts:
    - Monolithic vs microservices architecture
    - Service design principles
    - Inter-service communication
    - API gateways
    - Database per service pattern
    - Testing and monitoring in microservices
    - Deployment strategies
    
    While microservices offer many benefits, they also introduce complexity. 
    Understand when and how to use them effectively.`,
    tags: ['microservices', 'architecture', 'backend', 'scalability'],
    postedBy: 'Marcus Thompson',
  },
  {
    title: 'Continuous Integration and Deployment (CI/CD)',
    content: `CI/CD pipelines automate the process of building, testing, and deploying applications. 
    They enable teams to release features faster with higher confidence.
    
    Topics covered:
    - CI/CD concepts and benefits
    - Setting up GitHub Actions
    - Running automated tests
    - Building and pushing Docker images
    - Deployment automation
    - Monitoring and rollback strategies
    - Common tools: Jenkins, GitLab CI, CircleCI
    
    Implementing CI/CD practices will improve your team's productivity and code quality.`,
    tags: ['cicd', 'devops', 'automation', 'deployment'],
    postedBy: 'Marcus Thompson',
  },
];

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  await prisma.blogs.deleteMany();
  await prisma.users.deleteMany();

  // Create User 1
  const user1 = await prisma.users.create({
    data: {
      name: 'Sarah Anderson',
      email: 'sarah.anderson@example.com',
      pfp: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 70)}.jpg`,
    },
  });

  console.log(`✅ Created user: ${user1.name}`);

  // Create User 2
  const user2 = await prisma.users.create({
    data: {
      name: 'Marcus Thompson',
      email: 'marcus.thompson@example.com',
      pfp: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 70)}.jpg`,
    },
  });

  console.log(`✅ Created user: ${user2.name}`);

  // Create blogs for User 1
  for (const blogData of blogsUser1) {
    await prisma.blogs.create({
      data: {
        title: blogData.title,
        content: blogData.content,
        image: getRandomImage(),
        tags: blogData.tags,
        postedBy: blogData.postedBy,
        userid: user1.id,
      },
    });
  }

  console.log(`✅ Created 6 blogs for ${user1.name}`);

  // Create blogs for User 2
  for (const blogData of blogsUser2) {
    await prisma.blogs.create({
      data: {
        title: blogData.title,
        content: blogData.content,
        image: getRandomImage(),
        tags: blogData.tags,
        postedBy: blogData.postedBy,
        userid: user2.id,
      },
    });
  }

  console.log(`✅ Created 6 blogs for ${user2.name}`);

  const totalUsers = await prisma.users.count();
  const totalBlogs = await prisma.blogs.count();

  console.log(`\n✨ Seed completed successfully!`);
  console.log(`📊 Total users: ${totalUsers}`);
  console.log(`📝 Total blogs: ${totalBlogs}`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });