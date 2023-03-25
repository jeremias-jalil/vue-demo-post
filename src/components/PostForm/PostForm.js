import PostService from '@/PostService';

const postSerivce = new PostService()

export default {
    name: "PostForm",
    props: {
        editingPost: Object,
        cancelEdit: Function
    },
    watch: {
        editingPost(post) {
            this.title = post?.title || ""
            this.body = post?.body || ""
            this.id = post?.id || ""
        }
    },
    data() {
        return {
            loading: false,
            title: "",
            body: "",
            errors: {},
            id: null
        }
    },
    methods: {
        onSubmit() {
            this.loading = true;
            if (!this.validForm()) {
                this.loading = false
                return
            }
            const post = {
                title: this.title,
                body: this.body,
                id: this.id
            }
            postSerivce.writePost(post)
                .then(res => {
                    this.body = ""
                    this.title = ""
                    this.$emit('postCreated', res.data)

                })
                .catch(err => console.error(err))
                .finally(() => {
                    this.loading = false
                })

        },
        onCancel() {
            this.$emit('cancelEdit')

        },
        validForm() {
            this.errors = {}
            if (this.title.trim() === "") {
                this.errors.title = "Title"
            }
            if (this.body.trim() === "") {
                this.errors.body = "Body"
            }
            if (Object.keys(this.errors).length > 0) {
                return false
            } else return true

        }
    }
}
