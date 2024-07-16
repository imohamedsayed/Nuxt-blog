export default defineEventHandler(async (event) => {
  // read query parameter
  // const { name } = getQuery(event);

  // read body
  // const { age } = await readBody(event);

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_icAcbK2h8vT0cfPzu3hEzVEoYzjQWMf7SQ1rk0Ft"
  );

  return data;
});
