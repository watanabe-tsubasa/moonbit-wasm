import fs from "node:fs/promises";

const bytes = await fs.readFile("./target/wasm/release/build/moonbit_wasm.wasm");

const { instance } = await WebAssembly.instantiate(bytes, {});

const fib = instance.exports.fib as (n: number) => bigint;

console.log(fib(10).toString());
