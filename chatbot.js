 // Chatbot functionality
 function toggleChat() {
  const chatbot = document.getElementById('chatbot');
  if (chatbot.style.display === 'none' || chatbot.style.display === '') {
      chatbot.style.display = 'flex';
  } else {
      chatbot.style.display = 'none';
  }
}

function sendQuickMessage(message) {
  document.getElementById('user-input').value = message;
  sendMessage();
}

function sendMessage() {
  const userInput = document.getElementById('user-input');
  const message = userInput.value.trim();

  if (message === '') return;

  const chatBody = document.getElementById('chat-body');

  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'message user-message';
  userMsg.textContent = message;
  chatBody.appendChild(userMsg);

  userInput.value = '';

  // Bot response
  setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.className = 'message bot-message';
      
      // Get response based on message
      const response = getBotResponse(message);
      botMsg.innerHTML = response; // Use innerHTML to render any HTML content
      
      chatBody.appendChild(botMsg);
      chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
      sendMessage();
  }
}

function getBotResponse(input) {
  input = input.toLowerCase();

  // General questions
  if (input.includes('hello') || input.includes('hi')) {
      return "Hello again! How can I assist you with your adventure plans today?";
  } else if (input.includes('package') || input === 'packages') {
      return `
          <strong>Our Adventure Packages:</strong>
          <ul style="margin-top: 8px; padding-left: 20px;">
              <li>White Water Rafting</li>
              <li>Waterfall Abseiling</li>
              <li>White Water Kayaking</li>
              <li>Canyoning Adventure</li>
              <li>Marvel Canyoning</li>
              <li>Mountain Biking</li>
              <li>Rainforest Trekking</li>
              <li>Day Outing Package</li>
              <li>Night Camping Package</li>
              <li>Makandawa Trekking</li>
              <li>Caving Adventure</li>
              <li>Family Rafting</li>
          </ul>
          <p style="margin-top: 8px;">Which package would you like more details about?</p>
      `;
  } else if (input.includes('price') || input === 'prices') {
      return `
          <strong>Price Range:</strong>
          <ul style="margin-top: 8px; padding-left: 20px;">
              <li>Rs 6,500 - Rs 22,000 per person</li>
              <li>Family packages available</li>
              <li>Group discounts offered</li>
          </ul>
          <p style="margin-top: 8px;">For exact pricing, please ask about a specific package.</p>
      `;
  } else if (input.includes('safe') || input === 'safety') {
      return `
          <strong>Safety Information:</strong>
          <ul style="margin-top: 8px; padding-left: 20px;">
              <li>Certified professional guides</li>
              <li>Top-quality safety equipment</li>
              <li>Safety briefings before all activities</li>
              <li>Perfect safety record since 2005</li>
              <li>First aid trained staff</li>
          </ul>
      `;
  } else if (input.includes('book') || input === 'booking') {
      return `
          <strong>Booking Options:</strong>
          <ul style="margin-top: 8px; padding-left: 20px;">
              <li>Call: +94 76 123 4567</li>
              <li>Email: info@kithulgalarafting.com</li>
              <li>Website booking form</li>
              <li>Walk-in bookings welcome</li>
          </ul>
          <p style="margin-top: 8px;">Which package would you like to book?</p>
      `;
      
  // Specific package questions
  } else if (input.includes('white water rafting') || input.includes('rafting')) {
      return "WHITE WATER RAFTING: Rs 5,000 ($40) per person. 3-4 hours on Class II-III rapids. Includes safety gear, guides, and refreshments. Perfect for beginners and experts!";
  } else if (input.includes('waterfall abseiling') || input.includes('abseiling')) {
      return "WATERFALL ABSEILING: Rs 10,500 ($45) per person. 5-6 hour adventure rappelling down waterfalls with natural slides and jumps. Thrilling experience!";
  } else if (input.includes('kayaking')) {
      return "WHITE WATER KAYAKING: Rs 12,000 ($65) per person. 2-3 hour session with certified instructors. Beginner and advanced options available.";
  } else if (input.includes('canyoning adventure')) {
      return "CANYONING ADVENTURE: Rs 10,000 ($60) per person. 4-5 hours exploring hidden canyons with jumps, slides and small waterfalls. Minimum age 12.";
  } else if (input.includes('marvel canyoning')) {
      return "MARVEL CANYONING: Rs 12,000 ($75) per person. 3 hour beginner-friendly canyoning through beautiful rock formations and small waterfalls.";
  } else if (input.includes('mountain biking')) {
      return "MOUNTAIN BIKING: Rs 8,500 ($50) per person. 4 hours through tea plantations and jungle paths with quality bikes and safety gear.";
  } else if (input.includes('rainforest trekking')) {
      return "RAINFOREST TREKKING: Rs 6,500 ($40) per person. 5-6 hours discovering biodiversity with visits to hidden waterfalls. Packed lunch included.";
  } else if (input.includes('day outing')) {
      return "DAY OUTING PACKAGE: Rs 12,000 ($75) per person. Combines rafting and trekking with picnic lunch. Best way to experience Kithulgala in one day!";
  } else if (input.includes('night camping')) {
      return "NIGHT CAMPING: Rs Rs 7,500 ($50) per person. Riverside camping with barbecue dinner and breakfast. Fall asleep to rainforest sounds!";
  } else if (input.includes('makandawa')) {
      return "MAKANDAWA TREKKING: Rs 5,000 ($35) per person. 6 hours in famous rainforest with rare birds, ancient trees and waterfalls. Nature guide included.";
  } else if (input.includes('caving')) {
      return "CAVING ADVENTURE: Rs 8,500 ($45) per person. 3-4 hours exploring underground caves with unique formations. Helmets and lights provided.";
  } else if (input.includes('family') || input.includes('children')) {
      return "FAMILY RAFTING: 10% off for 4 family members, 15% off for 5+. 2 hours of gentle rapids perfect for kids 8+. Special safety for children included.";
  } else {
      return "I can tell you about our adventure packages, prices, safety, or booking options. What would you like to know?";
  }
}

// Initialize chat
window.onload = function() {
  setTimeout(() => {
      const chatBody = document.getElementById('chat-body');
      chatBody.scrollTop = chatBody.scrollHeight;
  }, 100);
};
