const commonjs = require('commonjs');
const systemjs = require('systemjs');

const Login = './components/Login';

test('renders without crashing', () => {
    const { baseElement } = render(<Login />)
    expect(baseElement).toBeDefined()
})