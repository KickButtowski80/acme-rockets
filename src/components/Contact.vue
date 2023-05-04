<template lang="" >
    <TitleSction title="Contact"/> 
    <form class="mx-4 my-20                
                    flex flex-col gap-5">
        <label for="subject" class="text-2xl">Subject:</label>
        <input type="text" name="subject" id="subject"
         placeholder="Your Subject ...✉️" required minlength="3" maxlength="60"
        class="h-12  border-solid border-2 border-slate-300  rounded-md p-2 text-xl ">
        <label for="message" class="text-2xl">Message:</label>
        <textarea name="message" id="message"  cols="30" rows="10"
        placeholder="Message ...🚀" required
        class="h-12 border border-slate-300 rounded-md p-2 text-xl"></textarea>    
       
        <input type="button" value="Submit"
                class="h-10 w-2/6 text-xl
                text-slate-300 mt-5
                bg-teal-700 hover:bg-teal-600 active:bg-teal-500
                rounded-md"> 
    </form> 
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>