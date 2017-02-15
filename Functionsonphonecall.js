function retrieveDescription() {
    // hey iam editing my own file file 
    var description = Xrm.Page.getAttribute("description").getValue();
    var subject = Xrm.Page.getAttribute("subject").getValue();
    if (description !== null && subject !== null) {
        if (description.indexOf("Recording: http://") !== -1 && subject.indexOf("Mast Client call") !== -1) {
            Xrm.Page.ui.tabs.get("phonecall").sections.get("phonecall_section_5").setVisible(true);
        } else {
            Xrm.Page.ui.tabs.get("phonecall").sections.get("phonecall_section_5").setVisible(false);
        }
    }
    if (Xrm.Page.ui.getFormType() !== 1) {
        try {
            parent.$("#WebResource_Playbackwidget")[0].contentDocument.location.reload();
        }
        catch (e) {
            $("#WebResource_Playbackwidget")[0].contentDocument.location.reload();
        }
    }
}
// i am using github newly
