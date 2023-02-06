function supermerger_mergen(){
    var id = randomId()
    requestProgress(id, gradioApp().getElementById('supermerger_merge_panel'), null, function(){})

    var res = create_submit_args(arguments)
    res[0] = id
    return res
}