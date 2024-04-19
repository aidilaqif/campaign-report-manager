<template>
    <div :class="{ 'sidebar-open': isOpen }" class="sidebar">
      <div class="sidebar-content">
        <!-- Your sidebar content goes here -->
        <slot></slot>
      </div>
      <button @click="toggleSidebar" class="toggle-button">{{ isOpen ? 'Close' : 'Open' }}</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleSidebar() {
        this.isOpen = !this.isOpen;
      }
    }
  };
  </script>
  
  <style>
  .sidebar {
    position: fixed;
    top: 0;
    left: -250px; /* Adjust this value according to your design */
    width: 250px; /* Adjust this value according to your design */
    height: 100%;
    background-color: #333; /* Adjust this value according to your design */
    transition: left 0.3s ease;
  }
  
  .sidebar-open {
    left: 0;
  }
  
  .sidebar-content {
    padding: 20px;
  }
  
  .toggle-button {
    position: absolute;
    top: 20px;
    right: -40px;
  }
  </style>
  