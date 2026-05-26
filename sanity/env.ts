export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-05-26'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  'x57dh840',
  'Hardcoded project ID: x57dh840'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
