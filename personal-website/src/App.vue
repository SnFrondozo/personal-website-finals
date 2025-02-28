<script setup>
import { ref, onMounted } from 'vue';
import { createClient } from '@supabase/supabase-js';

// Supabase Setup (Replace with your own Supabase keys)
const supabase = createClient('https://obrdbrtxqenkenvyrfsx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9icmRicnR4cWVua2VudnlyZnN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MzI0MDMsImV4cCI6MjA1NjMwODQwM30.M4c9XoIIoM4dVeRJm8f6dmGuP_7bt6yDN0x0uoWxgn8');

const name = ref('');
const message = ref('');
const comments = ref([]);

const fetchComments = async () => {
  const { data } = await supabase.from('comments').select('*').order('created_at', { ascending: false });
  comments.value = data || [];
};

const addComment = async () => {
  if (!name.value || !message.value) return;
  await supabase.from('comments').insert([{ name: name.value, message: message.value }]);
  name.value = '';
  message.value = '';
  fetchComments();
};

onMounted(fetchComments);
</script>

<template>
  <div class="container">
    <h1>My Portfolio</h1>
    <img src="/profile.jpg" alt="Your Image" width="200px" style="border:3px solid red; border-radius:50%; display:block; margin:auto;">
    <p style="text-align:center;">Hi, I'm [Your Name]! Welcome to my personal portfolio website.</p>

    <h2>Guestbook</h2>
    <input v-model="name" placeholder="Your Name" />
    <textarea v-model="message" placeholder="Your Message"></textarea>
    <button @click="addComment">Post Comment</button>

    <div v-for="comment in comments" :key="comment.id" class="comment">
      <strong>{{ comment.name }}</strong>: {{ comment.message }}
    </div>
  </div>
</template>

<style>
body {
  background-color: black;
  color: white;
  font-family: 'Poppins', sans-serif;
}
h1 {
  color: red;
  text-align: center;
}
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
button {
  background: red;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
button:hover {
  background: darkred;
}
.comment {
  border-bottom: 1px solid red;
  padding: 10px 0;
}
input, textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid red;
  background: black;
  color: white;
}
</style>
