package itengine.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import itengine.dto.LoginDTO;
import itengine.security.TokenUtils;
import itengine.services.UserDetailsServiceImpl;


@CrossOrigin
@RestController
@RequestMapping("/api/login")
public class LoginController {
	
//	@Autowired
//	private LoginService loginService;
//	
//	@RequestMapping(method = RequestMethod.POST)
//	public ResponseEntity<String> login(@RequestBody LoginDTO loginDTO) {
//        return loginService.login(loginDTO);
//	}
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	
	@Autowired
	TokenUtils tokenUtils;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<String> login(@RequestBody LoginDTO loginDTO) {
        try {
        	
        	UserDetails details = userDetailsService.loadUserByUsername(loginDTO.getUsername());
        	
			UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
					loginDTO.getUsername(), loginDTO.getPassword());
			
			System.out.println(loginDTO.getUsername() + " " + passwordEncoder.encode(loginDTO.getPassword()));
           
			Authentication authentication = authenticationManager.authenticate(token);
            
			SecurityContextHolder.getContext().setAuthentication(authentication);
            
			
			
            return new ResponseEntity<String>(tokenUtils.generateToken(details), HttpStatus.OK);
        } catch (Exception ex) {
        	ex.printStackTrace();
            return new ResponseEntity<String>("Invalid login", HttpStatus.BAD_REQUEST);
        }
	}
	
	
	
//	@PostMapping("/login")
//	public ResponseEntity<LoginResponseDTO> authorize(@Valid @RequestBody LoginDTO loginDTO) {
//		UserDetails details = userDetailsServiceImpl.loadUserByUsername(loginDTO.getUsername());
//		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
//				loginDTO.getUsername(), loginDTO.getPassword());
//
//		Authentication authentication = authenticationManager.authenticate(authenticationToken);
//		SecurityContextHolder.getContext().setAuthentication(authentication);
//
//		String jwt = tokenProvider.generateToken(details);
//
//		String role = details.getAuthorities().stream().findFirst().get().getAuthority();
//
//		return new ResponseEntity<>(new LoginResponseDTO(jwt, role, details.getUsername()), HttpStatus.OK);
//	}

}
