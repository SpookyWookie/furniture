package itengine.models.utils;

public class RESTError {

	private Integer id;

   
    private String message;

    public Integer getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }


    public RESTError(Integer id, String message) {
        super();
        this.id = id;
        this.message = message;
    }
}
