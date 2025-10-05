const SUPABASE_URL = "https://fjyqsngptsiclqysdaxc.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqeXFzbmdwdHNpY2xxeXNkYXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MjQyNzMsImV4cCI6MjA3NTIwMDI3M30.ONAteDCJvRKFexQwnNVtFefFSfFbrVH1L1bn4mEzStM";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function addPost(user, content) {
  const { error } = await supabase.from("posts").insert([{ user: user.displayName, content, likes: 0 }]);
  if (error) console.error(error);
}

async function getPosts() {
  const { data, error } = await supabase.from("posts").select("*").order("id", { ascending: false });
  if (error) console.error(error);
  return data;
}

async function likePost(id, likes) {
  const { error } = await supabase.from("posts").update({ likes }).eq("id", id);
  if (error) console.error(error);
}
