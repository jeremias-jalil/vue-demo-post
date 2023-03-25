<template>
    <form v-if="!loading" class="form" v-on:submit.prevent="onSubmit">
        <div class="imput-field">
            <label for="title">Title</label>
            <input type="text" name="title" v-model="title" :class="[errors.title ? 'invalid' : 'validate']">
            <span class="helper-text" data-error="Title must not be empty"></span>
        </div>
        <div class="imput-field">
            <label for="Body">Body</label>
            <input type="text" name="body" v-model="body" :class="[errors.body ? 'invalid' : 'validate']">
            <span class="helper-text" data-error="Body must not be empty"></span>
        </div>
        <button type="submit" class="waves-effet waves-light btn">
            {{ id ? "Update" : "Add" }}
        </button>
        <button class="waves-effet waves-light btn" v-if="id" @click.prevent="onCancel">
            Cancel
        </button>

    </form>

    <div class="progress" v-else-if="loading">
        <div class="indeterminate"></div>
    </div>
</template>

<script src="./PostForm.js"></script>


<style scoped>
.form {
    margin: 50px;
}

.progress {
    margin: 100px 0;
}

.btn {
    margin: 5px;
}
</style>
