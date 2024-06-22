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
                <h2>Prediction: {{ prediction }}</h2>
                <h2>Model Performance:</h2>
                <p>Mean Absolute Error: {{ mae }}</p>
                <p>R^2 Score: {{ r2 }}</p>
            </div>
            <div class="visualizations">
                <h2>Data Visualizations:</h2>
                <img src="/Users/matoyeng/Documents/GitHub/campaign-report-manager/static/likes_vs_impressions.png"
                    alt="Likes vs Impressions">
                <img src="/Users/matoyeng/Documents/GitHub/campaign-report-manager/static/comments_vs_impressions.png"
                    alt="Comments vs Impressions">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Sidebar from '/Users/matoyeng/Documents/GitHub/campaign-report-manager/src/components/Sidebar.vue';
import Navbar from '/Users/matoyeng/Documents/GitHub/campaign-report-manager/src/components/Navbar.vue';

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
}

.form-predict label {
    display: block;
    margin-bottom: 10px;
}

.form-predict input[type="number"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: #ccc 1px solid;
    border-radius: 5px;
}

.form-predict button[type="submit"] {
    background: #50b3a2;
    color: #fff;
    border: 0;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
}

.form-predict button[type="submit"]:hover {
    background: #45a091;
}

.results {
    margin-top: 30px;
    padding: 20px;
    background: #fff;
    border: #ccc 1px solid;
    border-radius: 5px;
}

.results h2 {
    margin-top: 0;
}

.visualizations img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 20px 0;
}
</style>
