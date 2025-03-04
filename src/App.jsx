import { IconBrandTwitter } from "@tabler/icons-react";
function App() {
  // insert image pakai lib ini
  // npm install @tabler/icons-react --save
  return (
    <div className="bg-slate-900 place-content-center grid min-h-screen">
      <div className="flex gap-x-2">
        <Button text="register" />
        <Button
          text={
            <>
              <div className="flex gap-x-2">
                <IconBrandTwitter />
                Login
              </div>
            </>
          }
        />
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
