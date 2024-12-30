export function logRoutes(message: string, router: Router): void {
    console.log(message, router?.stack?.filter(r => r.route).map(r => ({
    path: r?.route?.path,
    methods: r?.route?.methods ?? 'Unknown Methods'
    })));

};