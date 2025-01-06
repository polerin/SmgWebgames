export const TEST_VALUE_MKAY = "test value ";
import app from './server.js';

const port = process.env['PORT'] ?? 9005;

const server = app.listen({ port: port }, () => {
    console.log(`Server ready at http://localhost:${port}`);
});

// Close the socket after N milliseconds of inactivity. This can be shorter than
// the idle timeout of ALB. When this happends, if this is shorter than idle
// timeout of ALB, ALB will return a 502 error. Otherwise, a 504 error will
// be returned. Node's default is 120 seconds
server.timeout = 10_000;

// This is for keep-alive connection between ALB and Node, so it can be
// reasonably long to re-use the same connection as long as possible.
// However, this should be longer than idle timeout of ALB, otherwise ALB
// tries to send a request using a socket that's already possibly closed by
// Node and ALB returns a 502 error to the client
server.keepAliveTimeout = 60_000;
