<template>
    <div>
        <div class="sidebar">
            <Sidebar />
        </div>
        <div class="content">
            <Navbar />
        </div>
        <div class="predict">
            <div class="form-predict">
                <h2>Predict Impressions</h2>
                <form @submit.prevent="predictImpressions">
                    <label for="likes">Likes:</label>
                    <input type="number" id="likes" v-model.number="form.likes" required>
                    <label for="comments">Comments:</label>
                    <input type="number" id="comments" v-model.number="form.comments" required>
                    <label for="shares">Shares:</label>
                    <input type="number" id="shares" v-model.number="form.shares" required>
                    <label for="saves">Saves:</label>
                    <input type="number" id="saves" v-model.number="form.saves" required>
                    <label for="profile_visits">Profile Visits:</label>
                    <input type="number" id="profile_visits" v-model.number="form.profileVisits" required>
                    <button type="submit">Predict</button>
                </form>
            </div>
            <div class="results">
                <h2>Prediction For Reach Of Unique Users: {{ prediction }}</h2>
                <!-- <h2>Model Performance:</h2> -->
                <!-- <p>Mean Absolute Error: {{ mae }}</p>
                <p>R^2 Score: {{ r2 }}</p> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Sidebar from '../components/Sidebar.vue';
import Navbar from '../components/Navbar.vue';

export default {
    components: {
        Sidebar,
        Navbar
    },
    data() {
        return {
            form: {
                likes: null,
                comments: null,
                shares: null,
                saves: null,
                profileVisits: null
            },
            prediction: null,
            mae: null,
            r2: null
        };
    },
    methods: {
        async predictImpressions() {
            try {
                console.log(this.form)
                
                const data = {"input":[this.form.likes,this.form.comments,this.form.shares,this.form.saves,this.form.profileVisits]}
                console.log(data)
                const response = await axios.post('http://127.0.0.1:5000/predict/', data);
                
                this.prediction = response.data.prediction;
                
                // this.mae = response.data.mae;
                // this.r2 = response.data.r2;
            } catch (error) {
                console.error('Error predicting impressions:', error);
            }
        }
    }
};
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    margin: 0;
    padding: 0;
}

.sidebar {
    flex: 0 0 10%;
    background-color: #f1f1f1;
    color: #f1f1f1;
}

.content {
    flex-grow: 1;
    background-color: #f1f6f9;
    color: #212a3e;
    padding: 20px;
    overflow-y: auto;
}

.predict {
    width: 50%;
    margin: auto;
    overflow: hidden;
}

.form-predict {
    background: #fff;
    padding: 20px;
    margin-top: 30px;
    border: #ccc 1px solid;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

}

.form-predict label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #34495e;
}

.form-predict input[type="number"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: #ccc 1px solid;
    border-radius: 5px;
    box-sizing: border-box;
}

.form-predict button[type="submit"] {
    background: #2980b9;
    color: #fff;
    border: 0;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s ease;
}

.form-predict button[type="submit"]:hover {
    background: #3498db;
}

.results {
    margin-top: 30px;
    padding: 20px;
    background: #fff;
    border: #ccc 1px solid;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.results h2 {
    margin-top: 0;
    color: #2980b9;
}
.visualizations {
    margin-top: 30px;
}

.visualizations h2 {
    margin-top: 0;
    color: #2980b9;
}

.visualizations img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 20px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
</style>
