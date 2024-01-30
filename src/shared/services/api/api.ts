const VITE_PMO_API = import.meta.env.VITE_PMO_API

export async function pmoApi<Data = never, Params = unknown, Body = never>({
  method,
  path,
  params,
  body,
}: {
  method: string
  path: string
  params?: Params
  body?: Body
}): Promise<Data> {
  const query = params ? stringifyQuery(params) : ""

  const response = await fetch(`${VITE_PMO_API}${path}?${query}`, {
    method,
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    console.error({ method, path, params, body })
    throw new Error(await response.text())
  }

  const data = await response.json()
  return data
}

export function stringifyQuery(input: Record<string, string>): string {
  const output: string[] = []

  for (const [key, value] of Object.entries(input)) {
    if (typeof value !== "undefined" && value !== null) {
      output.push(`${key}=${value}`)
    }
  }

  return output.join("&")
}
