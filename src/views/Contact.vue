<template>
  <div class="container">
    <h1 class="title ml-4">Contact us</h1>
    <form action="POST" class="container column is-6 mt-6 mb-6">
      <div class="field ">
        <label class="label">Name</label>
        <div class="control has-icons-left">
          <input class="input" type="text" placeholder="Name" />
          <span class="icon is-small is-left">
            <i class="fas fa-user-alt"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left ">
          <input class="input" type="email" placeholder="Email input" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Choose Subject</option>
              <option>Personal Website</option>
              <option>Landing Page</option>
              <option>Fix Bugs</option>
              <option>Cooperation</option>
              <option>Other Question</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field mt-6 mb-4">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" />
            I agree to the <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-danger">Submit</button>
        </div>
        <div class="control">
          <button class="button is-danger is-light">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>