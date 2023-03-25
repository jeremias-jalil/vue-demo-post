<template>
    <div class="container">
        <div class="row">
            <div class="col s6">
                <PostForm v-on:postCreated="addPost" :editingPost="editingPost" v-on:cancelEdit="cancelEdit" />
            </div>
            <div class="col s3" style="margin:50px">
                <p>Limit number of post</p>
                <input type="number" v-model="postLimit">
                <button @click.prevent="setLimit()" class="waves-effect waves-light btn">Set</button>
            </div>
        </div>
        <div class="row">
            <div class="col s6" v-for="(post, index) in posts" v-bind:items="post" :index="index" :key="post.id">
                <div class="card">
                    <div class="card-content">
                        <p class="card-title">{{ post.title }}</p>
                        <p class="timestamp">{{ new Date(post.createdAt).toDateString() }}</p>
                        <p>{{ post.body }}</p>
                    </div>
                    <div class="card-action">
                        <a href="#" @click="editPost(post)">Edit</a>
                        <a href="#" class="delete-btn" @click="deletePost(post)">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostServise from '../PostService'
import PostForm from '../components/PostForm/PostForm.vue'

const postSerivce = new PostServise()

export default {
    name: "HomeView",
    components: {
        PostForm
    },
    data() {
        return {
            posts: [],
            postLimit: 5,
            editingPost: null
        };
    },
    methods: {
        addPost(post) {
            if (this.posts.find(p => p.id === post.id)) {
                const index = this.posts.findIndex(p => p.id === post.id)
                this.posts.splice(index, 1, post)
            } else this.posts.unshift(post)
        },
        editPost(post) {
            this.editingPost = post
        },
        cancelEdit() {
            console.log("asdasd")
            this.editingPost = null
        },
        deletePost(post) {
            postSerivce.deletePost(post.id)
                .then(() => {
                    this.posts = this.posts.filter(p => p.id !== post.id)
                })
        },
        setLimit() {
            postSerivce.getPosts(this.postLimit)
                .then(res => this.posts = res.data)
                .catch(err => console.error(err))
        }
    },
    created() {
        postSerivce.getAllPosts()
            .then(res => {
                this.posts = res.data

            })
            .catch(err => console.log('err', err))
    },

}
</script>

<style scoped>
.card .card-content .card-title {
    margin-bottom: 0;
}

.card .card-content p.timestamp {
    color: #999;
    margin-bottom: 10px;
}

.delete-btn {
    color: red !important
}

.btn {
    margin: 5px;
}
</style>


