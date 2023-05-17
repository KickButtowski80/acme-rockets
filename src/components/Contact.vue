<template lang="" >
    <TitleSction title="Contact"/> 
    <form  action="" class=" my-20                
                    flex flex-col gap-5 max-w-xl md:max-w-2xl mx-auto">
        <label for="subject" class="text-2xl">Subject:</label>
        <input type="text" name="subject" id="subject"
        placeholder="Your Subject ...✉️" 
         minlength="3" maxlength="60" required
        class="h-12  border-solid border-2
         border-slate-300 rounded-md p-2
          text-xl" />
        <label for="message" class="text-2xl">Message:</label>
        <textarea name="message" id="message"  cols="30" rows="10"
        placeholder="Message ...🚀" required
        class="h-40 border border-slate-300
             rounded-md p-2 text-xl"></textarea>    
       
        <button
                class="w-2/6 md:w-48 text-xl  font-semibold p-5
                text-slate-300 mt-5
                bg-teal-700 hover:bg-teal-600 active:bg-teal-500
                rounded-xl border border-slate-900 border-solid"> 
                Submit
        </button>
    </form> 
</template>