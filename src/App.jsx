function App() {
  return (
    <div className="bg-slate-900 place-content-center grid min-h-screen">
      <div className="flex gap-x-2">
        <Button>Register</Button>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

function Button(props) {
  const { children } = props;
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded">
      {children}
    </button>
  );
}

export default App;
