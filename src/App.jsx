function App() {
  return (
    <div className="bg-slate-900 place-content-center grid min-h-screen">
      <div className="flex gap-x-2">
        <Button text="register" />
        <Button text="login" />
      </div>
    </div>
  );
}

function Button(props) {
  const { text } = props;
  return (
    <button className="bg-blue-600 text-white px-4 py-2 rounded">{text}</button>
  );
}

export default App;
