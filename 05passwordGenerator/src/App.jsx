import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  // useRef
  const passwordRef = useRef(null);

  const copyPassswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);

    window.navigator.clipboard.writeText(password);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [password]);

  // useCallback
  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      password += str.charAt(char);
    }

    setPassword(password);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // useEffect
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="w-full max-w-md shadow-lg rounded-lg px-6 py-5 bg-gray-700">
        <h1 className="text-white text-3xl font-bold text-center mb-5">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-5">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPassswordToClipboard}
            className={`px-4 py-2 text-white shrink-0 cursor-pointer transition-all duration-300 ${
              copied
                ? "bg-green-600 hover:bg-green-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-around text-sm mt-2">
          {/* Range */}
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label>Length: {length}</label>
          </div>

          {/* Numbers */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Characters */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
