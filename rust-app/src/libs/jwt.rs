use jsonwebtoken::{decode, encode, Algorithm, DecodingKey, EncodingKey, Header, Validation};
use serde::{Deserialize, Serialize};

/// Our claims struct, it needs to derive `Serialize` and/or `Deserialize`
#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    exp: usize,
    sub: String,
}

pub struct Jwt {
    pub secret: String,
}

impl Jwt {
    pub fn new(secret: String) -> Self {
        Self { secret }
    }

    pub fn encode(&self, sub: String) -> Result<String, String> {
        let my_claims = Claims {
            exp: 10000000000,
            sub,
        };
        let token = encode(
            &Header::new(Algorithm::HS512),
            &my_claims,
            &EncodingKey::from_secret(self.secret.as_ref()),
        );
        match token {
            Ok(token) => Ok(token),
            Err(_) => Err("Error encoding token".to_string()),
        }
    }

    pub fn decode(&self, token: &str) -> Result<String, String> {
        let token = decode::<Claims>(
            token,
            &DecodingKey::from_secret(self.secret.as_ref()),
            &Validation::new(Algorithm::HS512),
        );
        match token {
            Ok(token) => Ok(token.claims.sub),
            Err(_) => Err("Error decoding token".to_string()),
        }
    }
}
