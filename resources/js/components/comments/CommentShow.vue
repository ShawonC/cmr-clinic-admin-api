<template>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group row mb-2 mb-md-0 text-only">
                <label class="col-md-4 col-form-label text-md-right">
                    User Id
                </label>
                <div class="col-md-8">
                    <dsp-text v-model="record.user_id" />
                </div>
            </div>
            <div class="form-group row mb-2 mb-md-0 text-only">
                <label class="col-md-4 col-form-label text-md-right">
                    Body
                </label>
                <div class="col-md-8">
                    <dsp-text v-model="record.body" />
                </div>
            </div>
            <div class="form-group row mb-2 mb-md-0 text-only">
                <label class="col-md-4 col-form-label text-md-right">
                    Commentable Type
                </label>
                <div class="col-md-8">
                    <dsp-text v-model="record.commentable_type" />
                </div>
            </div>
            <div class="form-group row mb-2 mb-md-0 text-only">
                <label class="col-md-4 col-form-label text-md-right">
                    Commentable Id
                </label>
                <div class="col-md-8">
                    <dsp-text v-model="record.commentable_id" />
                </div>
            </div>
            <div class="form-group row mb-2 mb-md-0 text-only">
                <label class="col-md-4 col-form-label text-md-right">
                    Deleted At
                </label>
                <div class="col-md-8">
                    <dsp-text v-model="record.deleted_at" />
                </div>
            </div>
        </div>
        <div class="col-md-6">
            test
        </div>
    </div>
</template>

<script>
export default {
    name: "comment-show",
    props: {
        record: {
            type: [Boolean, Object],
            default: false
        }
    }
};
</script>
