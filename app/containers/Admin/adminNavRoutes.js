const adminRoutes = {
  userRoutes: [
    {
      text: 'Posts',
      icon: 'mail',
      path: '/admin/posts',
    },
    {
      text: 'New Post',
      icon: 'mail',
      path: '/admin/posts/create',
    },
  ],
  adminRoutes: [
    {
      text: 'Users',
      icon: 'inbox',
      path: '/admin/users',
    },
    {
      text: 'Invite User',
      icon: 'inbox',
      path: '/admin/invite-user',
    },
  ],
};

export default adminRoutes;
