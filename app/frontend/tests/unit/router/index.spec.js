import getRouter from '@/router';

describe('Router', () => {
  const router = getRouter();
  const routes = router.options.routes;

  it('has the correct number of routes', () => {
    expect(routes).toHaveLength(5);
  });

  it('has the expected routes', () => {
    const routeSet = new Set(routes);
    expect(routeSet).toContainEqual(expect.objectContaining({ name: 'Home' }));
    expect(routeSet).toContainEqual(expect.objectContaining({ name: 'Form' }));
    expect(routeSet).toContainEqual(expect.objectContaining({ name: 'SecureForm' }));
    expect(routeSet).toContainEqual(expect.objectContaining({ name: 'NotFound' }));
  });
});
