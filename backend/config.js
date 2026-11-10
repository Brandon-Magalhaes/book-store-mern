export const PORT = process.env.PORT || 5555;

const mongoDBURL = process.env.MONGODB_URI;

if (!mongoDBURL) {
  throw new Error(
    "Defina a variavel de ambiente MONGODB_URI antes de iniciar o servidor. " +
      "Use o arquivo .env.example como modelo."
  );
}

export { mongoDBURL };
