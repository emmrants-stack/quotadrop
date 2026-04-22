const SUPA_URL = 'https://bmphogbzsvpyvtqjxrvz.supabase.co'

const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtcGhvZ2J6c3ZweXZ0cWp4cnZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4NDMzNDYsImV4cCI6MjA5MjQxOTM0Nn0.8NIs5zEaqqE8bWiUnsTvPlLU-pKbzxiN4YLbx6oAJVE'

async function fetchListings() {

  const res = await fetch(`${SUPA_URL}/rest/v1/listings?select=*&order=created_at.desc`, {

    headers: { apikey: SUPA_KEY, Authorization: `Bearer ${SUPA_KEY}` }

  })

  const data = await res.json()

  renderListings(data)

}

async function postListing(body) {

  await fetch(`${SUPA_URL}/rest/v1/listings`, {

    method: 'POST',

    headers: { apikey: SUPA_KEY, Authorization: `Bearer ${SUPA_KEY}`, 'Content-Type': 'application/json' },

    body: JSON.stringify(body)

  })

}